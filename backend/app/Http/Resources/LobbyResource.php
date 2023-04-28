<?php

namespace App\Http\Resources;

use App\Models\LobbyStep;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

/**
 * @property integer $people_count
 * @property integer $round_count
 *
 * @property string $creator
 * @property string $key
 *
 * @property boolean $is_finished
 *
 * @property LobbyStep $lastStep
 * @property string $created_at
 * @property mixed $round_time
 */
class LobbyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'key' => $this->key,
            'people_count' => $this->people_count,
            'creator' => $this->creator,
            'is_finished' => $this->is_finished,
            'last_step' => $this->lastStep?->step,
            'round_count' => $this->round_count,
            'round_time' => $this->round_time,
            'created_at' => Carbon::parse($this->created_at, config('app.timezone'))->format('d-m-Y H:i:s'),
        ];
    }
}
