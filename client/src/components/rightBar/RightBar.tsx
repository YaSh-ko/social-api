import './rightBar.scss'

const RightBar = () => {
    return (
        <div className='rightBar'>
            <div className="container">
                <div className="item">
                    <span className="itemName">Мероприятия</span>
                    <div className="event">
                        <div className="eventInfo">
                            <img src="" alt="" />
                            <span className="eventName">ИТ конференция</span>
                            <div className="eventDate">
                                <span className="eventDay">20.05</span>
                                <span className="eventTime">18:00</span>
                            </div>
                        </div>
                        <button>Перейти</button>
                    </div>
                    <div className="event">
                        <div className="eventInfo">
                            <img src="" alt="" />
                            <span className="eventName">ИТ конференция</span>
                            <div className="eventDate">
                                <span className="eventDay">20.05</span>
                                <span className="eventTime">18:00</span>
                            </div>
                        </div>
                        <button>Перейти</button>
                        
                    </div>
                </div>

                <div className="item">
                    <span className="itemName">Пользователи онлайн</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="" alt="" />
                            <div className="online"/>
                            <span className="userName">Кожаев Яков</span>
                        </div>
                        <button>Написать</button>
                    </div>

                    <div className="user">
                        <div className="userInfo">
                            <img src="" alt="" />
                            <div className="online"/>
                            <span className="userName">Петр Малыгин</span>
                        </div>
                        <button>Написать</button>
                    </div>

                    <div className="user">
                        <div className="userInfo">
                            <img src="" alt="" />
                            <div className="online"/>
                            <span className="userName">Сергей Краев</span>
                        </div>
                        <button>Написать</button>
                    </div>

                    <div className="user">
                        <div className="userInfo">
                            <img src="" alt="" />
                            <div className="online"/>
                            <span className="userName">Алексей Шашкин</span>
                        </div>
                        <button>Написать</button>
                    </div>

                    <div className="user">
                        <div className="userInfo">
                            <img src="" alt="" />
                            <div className="online"/>
                            <span className="userName">Роман Сабов</span>
                        </div>
                        <button>Написать</button>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default RightBar;