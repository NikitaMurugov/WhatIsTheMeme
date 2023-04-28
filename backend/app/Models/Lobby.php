<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Symfony\Component\Translation\Exception\NotFoundResourceException;

/**
 *
 * @property int $id
 * @property boolean $is_finished
 * @property string $key
 * @property string $creator
 * @property int $people_count
 */
class Lobby extends Model
{
    const STEP_BEGIN = 1;
    const STEP_SECOND = 2;
    const STEP_THIRD = 3;
    const STEP_END = 4;

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

    protected $appends = [
        'lastStep',
    ];

    public function steps(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(LobbyStep::class);
    }

    /**
     * @return mixed
     */
    public function getLastStepAttribute(): mixed
    {
        $steps = $this->steps;
        if (!$steps) {
            return new NotFoundResourceException("steps for '{$this->key}' lobby not found");
        }
        return $steps->firstWhere('stage', $steps->max('stage'));
    }
}
