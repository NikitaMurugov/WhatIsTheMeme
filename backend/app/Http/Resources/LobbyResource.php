<?php

namespace App\Http\Resources;

use App\Models\LobbyStep;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property integer $people_count
 * @property string $creator
 * @property boolean $is_finished
 * @property string $key
 * @property LobbyStep $lastStep
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
            'last_step' => new LobbyStepResource($this->lastStep),
        ];
    }
}
