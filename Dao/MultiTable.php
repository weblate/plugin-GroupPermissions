<?php

/**
 * Matomo - free/libre analytics platform
 *
 * @link http://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 *
 */

namespace Piwik\Plugins\GroupPermissions\Dao;

use Piwik\Common;
use Piwik\Db;

class MultiTable
{
    /** @var string $tablePrefixedGroupPermission */
    private $tablePrefixedGroupPermission = '';

    /** @var string $tablePrefixedGroupUser */
    private $tablePrefixedGroupUser = '';

    public function __construct()
    {
        $this->tablePrefixedGroupPermission = Common::prefixTable(GroupPermission::TABLE);
        $this->tablePrefixedGroupUser = Common::prefixTable(GroupUser::TABLE);
    }

    /**
     * @return \Piwik\Tracker\Db|\Piwik\Db
     */
    private function getDb()
    {
        /** @phpstan-ignore return.type */
        return Db::get();
    }

    /**
     * @return array<array{
     *   idsite: int,
     *   access: string
     * }>
     */
    public function getPermissionsOfUser(string $login): array
    {
        $tablePermission = $this->tablePrefixedGroupPermission;
        $tableUser = $this->tablePrefixedGroupUser;
        $sql = "SELECT ga.idsite, ga.access FROM $tablePermission as ga 
                INNER JOIN $tableUser AS gu 
                ON ga.idgroup = gu.idgroup 
                WHERE gu.login = ?";

        $permissions = $this->getDb()->fetchAll($sql, [$login]);
        if (!$permissions) {
            return [];
        }

        return $permissions;
    }
}
