function getData() {
    let api = 'https://us-central1-trialdayzl.cloudfunctions.net/e2e/data';

    fetch(api)
        .then(function (response) {
            let data = response.json();
            return data;

            console.log(JSON.stringify(data));
        })
}