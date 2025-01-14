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
use Piwik\DbHelper;

class GroupPermission
{
    public const TABLE = 'gpermissions_access';

    /** @var string $tablePrefixed */
    private $tablePrefixed = '';

    public function __construct()
    {
        $this->tablePrefixed = Common::prefixTable(self::TABLE);
    }

    /**
     * @return \Piwik\Tracker\Db|\Piwik\Db
     */
    private function getDb()
    {
        /** @phpstan-ignore return.type */
        return Db::get();
    }

    public function install(): void
    {
        DbHelper::createTable(self::TABLE, "
                  `idgroup` int(10) UNSIGNED NOT NULL,
                  `idsite` int(10) UNSIGNED NOT NULL,
                  `access` VARCHAR(100) NOT NULL,
                  PRIMARY KEY(`idgroup`, `idsite`)");
    }

    public function uninstall(): void
    {
        Db::query(sprintf('DROP TABLE IF EXISTS `%s`', $this->tablePrefixed));
    }

    public function createPermission(int $idGroup, int $idSite, string $access): void
    {
        $db = $this->getDb();

        $query = 'INSERT INTO ' . $this->tablePrefixed
                . ' (idgroup,idsite,access) VALUES (?,?,?)'
                . ' ON DUPLICATE KEY UPDATE access=?';

        $db->query($query, [
            $idGroup,
            $idSite,
            $access,
            $access
        ]);
    }

    /**
     * @return array<array{
     *  idsite: int,
     *  access: string
     * }>
     */
    public function getPermissionsOfGroup(int $idGroup): array
    {
        $idGroup = intval($idGroup);
        $table = $this->tablePrefixed;

        $permissions = $this->getDb()->fetchAll("SELECT idsite, access FROM $table WHERE idgroup = ?", [$idGroup]);
        if (!$permissions) {
            return [];
        }

        return $permissions;
    }

    /**
     * @return array<array{
     *   idgroup: int,
     *   access: string
     * }>
     */
    public function getPermissionsOfSite(int $idSite): array
    {
        $idSite = intval($idSite);
        $table = $this->tablePrefixed;

        $permissions = $this->getDb()->fetchAll("SELECT idgroup, access FROM $table WHERE idsite = ?", [$idSite]);
        if (!$permissions) {
            return [];
        }

        return $permissions;
    }

    public function removePermission(int $idGroup, int $idSite): void
    {
        $table = $this->tablePrefixed;
        $query = "DELETE FROM $table WHERE idgroup = ? AND idSite = ?";
        $bind = [intval($idGroup), intval($idSite)];
        $this->getDb()->query($query, $bind);
    }

    public function removeAllPermissionsOfGroup(int $idGroup): void
    {
        $table = $this->tablePrefixed;
        $query = "DELETE FROM $table WHERE idgroup = ?";
        $bind = [intval($idGroup)];
        $this->getDb()->query($query, $bind);
    }

    public function removeAllPermissionsForSite(int $idSite): void
    {
        $table = $this->tablePrefixed;
        $query = "DELETE FROM $table WHERE idSite = ?";
        $bind = [intval($idSite)];
        $this->getDb()->query($query, $bind);
    }
}
