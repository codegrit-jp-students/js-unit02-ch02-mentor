import _ from 'lodash';

const propertyData = {
  id: 1,
  propertyName: '1BR Japanese-style Private Room near Kyoto Station',
  propertyType: 'private',
  cancelPolicy: 'strict',
  roomNum: 1,
  bathroomNum: 1,
  priceInDollars: 50,
  host: {
    id: 1,
    firstName: 'Tom'
  }
}

function handleClick(e) {
  e.preventDefault();
  const mainEl = document.getElementById('main');
  return getData()
    .then((data) => {
      mainEl.innerHTML = `
        <div className="property-info-wrapper">
          <p><b>タイトル: </b>${data.propertyName}</p>
          <p><b>タイプ: </b>${data.propertyType}</p>
          <p><b>キャンセルポリシー: </b>${data.cancelPolicy}</p>
          <p><b>部屋数: </b>${data.roomNum}</p>
          <p><b>バスルーム数: </b>${data.bathroomNum}</p>
          <p><b>一泊あたり: </b>${data.priceInDollars}ドル</p>
          <p><b>ホスト: </b>${data.host.firstName}</p>
        </div>
      `
    })
    .catch((errorMessage) => {
      mainEl.innerHTML = `
        <div className="property-info-wrapper">
          <p>${errorMessage}</p>
        </div>
      `
    })
}

function getData() {
  return fetchData()
    .then((res) => {
      if (res.success) {
        return Promise.resolve(res.propertyData);
      } else {
        return Promise.reject(res.message);
      }
    })
}

function fetchData() {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      const randomNum = _.random(1, 5)
      if (randomNum <= 4) {
        resolve(Object.assign({}, { propertyData }, { success: true }));
      } else {
        resolve({ success: false, message: 'データの取得に失敗しました。' });
      }
    }, 1000)
  })
}

{
  const button1 = document.getElementById('button1');
  button1.addEventListener("click", handleClick);
}