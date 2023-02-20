<?php

namespace App\Enums;

enum MaritalStatus: string
{
    case SINGLE = 'single';
    case MARRIED = 'married';
    case DIVORCED = 'divorced';
    case WIDOWED = 'widowed';
    case SEPARETED = 'separeted';
    case CIVIL_UNION = 'civil_union';
    case DOMESTIC_PARTNERSHIP = 'domestic_partnership';

    /**
     * Get all case values in array
     * @return array
     */
    public static function all(): array
    {
        return array_map(
            fn (self $object) => $object->value,
            self::cases()
        );
    }

    /**
     * Get label
     * @return string
     */
    public function label(): string
    {
        return match ($this) {
            self::SINGLE => 'Solteiro(a)',
            self::MARRIED => 'Casado(a)',
            self::DIVORCED => 'Divorciado(a)',
            self::WIDOWED => 'Viúvo(a)',
            self::SEPARETED => 'Separado(a)',
            self::CIVIL_UNION => 'União Estável',
            self::DOMESTIC_PARTNERSHIP => 'Parceiro(a) Doméstico(a)',
        };
    }
}
