<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @method static create(array $array)
 */
class LobbyStep extends Model
{
    protected $fillable = [
        'lobby_id',
        'step',
    ];
}
