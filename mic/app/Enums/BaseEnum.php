<?php

namespace App\Enums;

enum BaseEnum
{
    public static function all(): array
    {
        return array_map(
            fn (self $object) => $object->value,
            self::cases()
        );
    }
}
