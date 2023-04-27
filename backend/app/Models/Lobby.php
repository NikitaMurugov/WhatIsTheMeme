<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 *
 * @property boolean $is_finished
 * @property string $key
 * @property string $creator
 * @property int $people_count
 */
class Lobby extends Model
{

    public function getRouteKeyName(): string
    {
        return 'key';
    }

    protected $fillable = [
        'key',
        'people_count',
        'creator',
        'is_finished',
    ];
}
