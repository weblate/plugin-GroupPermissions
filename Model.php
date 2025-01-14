<?php

/**
 * Matomo - free/libre analytics platform
 *
 * @link http://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 *
 */

namespace Piwik\Plugins\GroupPermissions;

use Piwik\Plugins\GroupPermissions\Dao\Group;
use Piwik\Plugins\GroupPermissions\Dao\GroupPermission;
use Piwik\Plugins\GroupPermissions\Dao\GroupUser;
use Piwik\Plugins\GroupPermissions\Dao\MultiTable;

class Model {
    public function install(): void {
        $group = new Group();
        $group->install();

        $permission = new GroupPermission();
        $permission->install();

        $user = new GroupUser();
        $user->install();
    }

    public function uninstall(): void {
        $group = new Group();
        $group->uninstall();

        $permission = new GroupPermission();
        $permission->uninstall();

        $user = new GroupUser();
        $user->uninstall();
    }

    // Group
    public function createGroup(string $name): int {
        $group = new Group();

        return $group->createGroup($name);
    }

    /**
     * @return array<array{
     *   idgroup: int,
     *   name: string
     * }>
     */
    public function getAllGroups(): array {
        $group = new Group();

        return $group->getAllGroups();
    }

    /**
     * @return array{
     *   idgroup: int,
     *   name: string
     * }
     */
    public function getGroupWithId(int $idGroup): array {
        $group = new Group();

        return $group->getGroupWithId($idGroup);
    }

    /**
     * @return array{
     *   idgroup: int,
     *   name: string
     * }
     */
    public function getGroupWithName(string $name): array {
        $group = new Group();

        return $group->getGroupWithName($name);
    }

    public function renameGroup(int $idGroup, string $newName): void {
        $group = new Group();
        $group->renameGroup($idGroup, $newName);
    }

    public function deleteGroup(int $idGroup): void {
        $group = new Group();
        $group->deleteGroup($idGroup);
    }

    // GroupUser
    public function addUserToGroup(int $idGroup, string $login): void {
        $user = new GroupUser();
        $user->addUserToGroup($idGroup, $login);
    }

    /**
     * @return array<array{
     *    login: string
     * }>
     */
    public function getMembersOfGroup(int $idGroup): array {
        $user = new GroupUser();

        return $user->getMembersOfGroup($idGroup);
    }

    public function isUserInGroup(string $login, int $idGroup): bool {
        $user = new GroupUser();

        return $user->isUserInGroup($login, $idGroup);
    }

    /**
     * @return array<array{
     *    idgroup: int
     * }>
     */
    public function getGroupsOfUser(string $login): array {
        $user = new GroupUser();

        return $user->getGroupsOfUser($login);
    }

    public function removeUserFromGroup(int $idGroup, string $login): void {
        $user = new GroupUser();
        $user->removeUserFromGroup($idGroup, $login);
    }

    public function removeAllUsersOfGroup(int $idGroup): void {
        $user = new GroupUser();
        $user->removeAllUsersOfGroup($idGroup);
    }

    public function removeUserFromAllGroups(string $login): void {
        $user = new GroupUser();
        $user->removeUserFromAllGroups($login);
    }

    // GroupPermission
    public function createPermission(int $idGroup, int $idSite, string $access): void {
        $permission = new GroupPermission();
        $permission->createPermission($idGroup, $idSite, $access);
    }

    /**
     * @return array<array{
     *  idsite: int,
     *  access: string
     * }>
     */
    public function getPermissionsOfGroup(int $idGroup): array {
        $permission = new GroupPermission();

        return $permission->getPermissionsOfGroup($idGroup);
    }

    /**
     * @return array<array{
     *   idgroup: int,
     *   access: string
     * }>
     */
    public function getPermissionsOfSite(int $idSite): array {
        $permission = new GroupPermission();

        return $permission->getPermissionsOfSite($idSite);
    }

    public function removePermission(int $idGroup, int $idSite): void {
        $permission = new GroupPermission();
        $permission->removePermission($idGroup, $idSite);
    }

    public function removeAllPermissionsOfGroup(int $idGroup): void {
        $permission = new GroupPermission();
        $permission->removeAllPermissionsOfGroup($idGroup);
    }

    public function removeAllPermissionsForSite(int $idSite): void {
        $permission = new GroupPermission();
        $permission->removeAllPermissionsForSite($idSite);
    }

    // MultiTable
    /**
     * @return array<array{
     *   idsite: int,
     *   access: string
     * }>
     */
    public function getPermissionsOfUser(string $login): array {
        $multiTable = new MultiTable();

        return $multiTable->getPermissionsOfUser($login);
    }
}
