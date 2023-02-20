<?php

namespace App\Enums;

use Illuminate\Database\Eloquent\Builder;

enum DataType: string
{
    case STRING = 'string';
    case BOOLEAN = 'boolean';
    case DATE = 'date';
    case DATETIME = 'datetime';

    /**
     * Get where
     * @return Builder
     */
    public function where(Builder $query, string $key, mixed $value): Builder
    {
        return match ($this) {
            self::STRING => $query->orWhere($key, 'like', "%$value%"),
            self::BOOLEAN => $query->orWhere($key, '=', filter_var($value, FILTER_VALIDATE_BOOLEAN)),
            self::DATE => $query->orWhere($key, '=', $value),
            self::DATETIME => $query->orWhere($key, '=', $value),
        };
    }
}
