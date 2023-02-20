<?php

namespace App\Enums;

enum Role: string
{
    case ROOT = 'root';
    case ADMIN = 'admin';
    case ASSOCIATE = 'associate';
    case PROVIDER = 'provider';

    /**
     * Get all
     * @return array
     */
    public static function all(): array
    {
        return array_map(
            fn (self $object) => $object->value,
            self::cases()
        );
    }
}