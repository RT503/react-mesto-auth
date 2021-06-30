class Api {
    constructor(config) {
        this._url = config.url;
        // this._token = config.authorization;
    }


    _checkResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }


    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                authorization: this._token
            },
        })
            .then(this._checkResponseData);
    }

    getCards() {
        return fetch(`${this._url}/cards`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                authorization: this._token
            }
        })
            .then(this._checkResponseData);
    }

    //get all data
    getAllData() {
        return Promise.all([this.getUserInfo(), this.getCards()]);
    }

    patchUserInfo({name, about}) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            credentials: 'include',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, about})
        })
            .then(this._checkResponseData);
    }

    postCard( {name, link} ) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                link: link
            })
        })
            .then(this._checkResponseData);
    }

    deleteCard(cardData) {
        return fetch(`${this._url}/cards/${cardData._id}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                authorization: this._token
            }
        })
            .then(this._checkResponseData);

    }

    likeCard(cardData) {
        return fetch(`${this._url}/cards/likes/${cardData._id}`, {
            method: 'PUT',
            credentials: 'include',
            headers: {
                authorization: this._token
            }
        })
            .then(this._checkResponseData);
    }

    changeLikeCardStatus(id, like) {
        return fetch(`${this._url}/cards/likes/${id}`, {
            method: like ? 'PUT' : 'DELETE',
            credentials: 'include',
            headers: {
                authorization: this._token
            }
        })
            .then(this._checkResponseData)
    }


    unlikeCard(cardData) {
        return fetch(`${this._url}/cards/likes/${cardData._id}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                authorization: this._token
            }
        })
            .then(this._checkResponseData);
    }

    updateAvatar({avatar}) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            credentials: 'include',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({avatar})
        })
            .then(this._checkResponseData);
    }
}

const api = new Api({
    url: 'https://api.rt503.nomoredomains.monster'
})

export default api;