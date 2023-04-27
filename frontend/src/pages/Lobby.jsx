import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../components/Button';

function Lobby() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div className="flex justify-center items-center h-full">
            <div className="flex gap-4 flex-col w-64">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="text-blue-900 bg-blue-400 w-full rounded mb-3">
                        <label className="p-3">
                            Количество игроков
                            <input
                                {...register('players_count')}
                                className="h-14 p-4 w-full rounded text-3xl text-center"
                                type="text"
                            />
                        </label>
                    </div>
                    <Button>
                        <input type="submit" className="h-14 p-4 w-full rounded mb-4 text-3xl text-center" />
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Lobby;
