<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;
use Symfony\Component\Translation\Exception\NotFoundResourceException;

/**
 *
 * @property int $id
 * @property boolean $is_finished
 * @property string $key
 * @property string $creator
 * @property int $people_count
 * @property int $round_count
 * @property int $round_time
 */
class Lobby extends Model
{
    const KEY_LENGHT = 8;
    const STEP_BEGIN = 1;

    protected static function booted()
    {
        parent::booted();

        self::created(function (self $lobby) {
            LobbyStep::create([
                'lobby_id' => $lobby->id,
                'step' => self::STEP_BEGIN,
            ]);
        });
    }

    public function getRouteKeyName(): string
    {
        return 'key';
    }

    protected $fillable = [
        'key',
        'people_count',
        'creator',
        'password',
        'is_finished',
        'round_count',
        'round_time',
    ];

    protected $appends = [
        'lastStep',
    ];

    public function steps(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(LobbyStep::class);
    }
    public function players(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(LobbyPlayer::class);
    }

    /**
     * @return mixed
     */
    public function getLastStepAttribute(): mixed
    {
        $steps = $this->steps;
        if (!$steps) {
            return [
                'step' => null
            ];
        }
        return $steps->firstWhere('step', $steps->max('step'));
    }

    public static function makeUniqueKey()
    {
        $code = self::createUniqueCode(self::KEY_LENGHT);
        return implode('-', str_split($code, self::KEY_LENGHT / 2));
    }
    public static function createUniqueCode($limit)
    {
        return substr(base_convert(sha1(uniqid(mt_rand())), 16, 36), 0, $limit);
    }

    public static function create($data)
    {
        $model = self::query()->create($data);

        return self::find($model->key);
    }

    /**
     * @param $key
     */
    public static function find($key)
    {
        return self::query()->where('key', $key)->first();
    }
}
