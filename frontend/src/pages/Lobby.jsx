import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../components/Button';
import { createLobby } from '../api/lobby';
import { useNavigate } from 'react-router-dom';

function Lobby() {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        const lobbyKey = await createLobby(data);
        navigate(`${lobbyKey}`);
    };

    return (
        <div className="flex justify-center items-center h-full w-1/2 ml-auto mr-auto">
            <div className="flex gap-4 flex-col">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-wrap mb-3">
                        <div className="flex w-full mb-3">
                            <div className="text-blue-900 bg-blue-400 w-full rounded mr-2">
                                <label className="p-3">
                                    Имя пользователя
                                    <input
                                        {...register('creator')}
                                        className="h-14 p-4 w-full rounded text-3xl text-center"
                                        type="text"
                                        defaultValue={'username'}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="flex w-full mb-3">
                            <div className="text-blue-900 bg-blue-400 w-full rounded mr-2">
                                <label className="p-3">
                                    Количество игроков
                                    <input
                                        {...register('players_count')}
                                        className="h-14 p-4 w-full rounded text-3xl text-center"
                                        type="number"
                                        defaultValue={4}
                                    />
                                </label>
                            </div>
                            <div className="text-blue-900 bg-blue-400 w-full rounded ml-2">
                                <label className="p-3">
                                    Количество раундов
                                    <input
                                        {...register('round_count')}
                                        className="h-14 p-4 w-full rounded text-3xl text-center"
                                        type="number"
                                        defaultValue={4}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="flex w-full">
                            <div className="text-blue-900 bg-blue-400 w-full rounded mr-2">
                                <label className="p-3">
                                    Время раунда в секундах
                                    <input
                                        {...register('round_time')}
                                        className="h-14 p-4 w-full rounded text-3xl text-center"
                                        type="number"
                                        defaultValue={60}
                                    />
                                </label>
                            </div>
                            <div className="text-blue-900 bg-blue-400 w-full rounded ml-2">
                                <label className="p-3">
                                    Пароль
                                    <input
                                        {...register('password')}
                                        className="h-14 p-4 w-full rounded text-3xl text-center"
                                        type="text"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <Button>
                        <input
                            type="submit"
                            className="h-14 p-4 w-full rounded mb-4 text-3xl text-center"
                            value={'Создать лобби'}
                        />
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Lobby;
