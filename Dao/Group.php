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
use Piwik\Piwik;
use Exception;

class Group {
    public const TABLE = 'gpermissions_group';

    /** @var string $tablePrefixed */
    private $tablePrefixed = '';

    public function __construct() {
        $this->tablePrefixed = Common::prefixTable(self::TABLE);
    }

    public function install(): void {
        DbHelper::createTable(self::TABLE, "
                  `idgroup` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
                  `name` VARCHAR(64) NOT NULL DEFAULT '',
                  PRIMARY KEY(`idgroup`)");
    }

    public function uninstall(): void {
        Db::query(sprintf('DROP TABLE IF EXISTS `%s`', $this->tablePrefixed));
    }

    public function createGroup(string $name): int {
        $db = $this->getDb();

        /** @phpstan-ignore method.notFound */
        $db->insert($this->tablePrefixed, [
            'name' => $name,
        ]);

        /** @phpstan-ignore method.notFound */
        return $db->lastInsertId();
    }

    /**
     * @return array<array{
     *   idgroup: int,
     *   name: string
     * }>
     */
    public function getAllGroups(): array {
        $table = $this->tablePrefixed;

        $groups = $this->getDb()->fetchAll("SELECT * FROM $table");
        if (!$groups) {
            return [];
        }

        return $groups;
    }

    /**
     * @return array{
     *   idgroup: int,
     *   name: string
     * }
     */
    public function getGroupWithId(int $idGroup): array {
        $idGroup = intval($idGroup);
        $table = $this->tablePrefixed;

        $group = $this->getDb()->fetchRow("SELECT * FROM $table WHERE idgroup = ?", [$idGroup]);
        if (!$group) {
            throw new Exception(Piwik::translate('GroupPermissions_ExceptionGroupDoesNotExist', $idGroup));
        }

        return $group;
    }

    /**
     * @return array{
     *   idgroup: int,
     *   name: string
     * }
     */
    public function getGroupWithName(string $name): array {
        $table = $this->tablePrefixed;

        $group = $this->getDb()->fetchRow("SELECT * FROM $table WHERE name = ?", [$name]);
        if (!$group) {
            throw new Exception(Piwik::translate('GroupPermissions_ExceptionGroupDoesNotExist', $name));
        }

        return $group;
    }

    public function renameGroup(int $idGroup, string $newName): void {
        $idGroup = intval($idGroup);

        $db = $this->getDb();

        /** @phpstan-ignore method.notFound */
        $db->update($this->tablePrefixed, [
            'name' => $newName,
        ], "idgroup = $idGroup");
    }

    public function deleteGroup(int $idGroup): void {
        $table = $this->tablePrefixed;
        $query = "DELETE FROM $table WHERE idgroup = ?";
        $bind = [intval($idGroup)];
        $this->getDb()->query($query, $bind);
    }

    /**
     * @return \Piwik\Tracker\Db|\Piwik\Db
     */
    private function getDb() {
        /** @phpstan-ignore return.type */
        return Db::get();
    }
}
