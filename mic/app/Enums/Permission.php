<?php

namespace App\Enums;

enum Permission: string
{
    case ASSOCIATES = 'associates';
    case PROVIDERS = 'providers';

    /**
     * Get all
     * @return array
     */
    public static function all(): array
    {
        $permissions =  array_map(
            fn (self $object) => $object->value,
            self::cases()
        );

        $actions = self::actions();

        $combinacoes = call_user_func_array('array_merge', array_map(function ($action) use ($permissions) {
            return array_map(function ($permission) use ($action) {
                return "$action-$permission";
            }, $permissions);
        }, $actions));

        return $combinacoes;
    }

    public static function actions(): array
    {
        return [
            'get',
            'list',
            'filter',
            'create',
            'update',
            'delete',
        ];
    }
}
