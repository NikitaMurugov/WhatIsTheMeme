<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property string $lobby_id
 * @property integer $step
 *
 * @method static create(array $array)
 */
class LobbyStep extends Model
{
    protected $fillable = [
        'lobby_id',
        'step',
    ];
}
