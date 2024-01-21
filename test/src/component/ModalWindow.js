import React from 'react';

function ModalWindow(props) {
    const {id, 
        firstName, 
        lastName, 
        maidenName, 
        age, 
        gender,
        phone,
        city, 
        address, 
        email, 
        weight, 
        height } = props;

    return ( 
        <div className="modal fade" id={`user${id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Информация</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body userInfo">
                    <p><span>Имя:</span> {firstName}</p>
                    <p><span>Фамилия:</span> {lastName}</p>
                    <p><span>Отчество:</span> {maidenName}</p>
                    <p><span>Возраст:</span> {age}</p>
                    <p><span>Пол:</span> {gender}</p>
                    <p><span>Номер телефона:</span> {phone}</p>
                    <p><span>Email:</span> {email}</p>
                    <p><span>Город:</span> {city}</p>
                    <p><span>Улица:</span> {address}</p>
                    <p><span>Вес:</span> {weight}</p>
                    <p><span>Рост:</span> {height}</p>
                </div>
            
            </div>
        </div>
    </div>
     );
    }
    
    export default ModalWindow;