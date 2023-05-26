//FOR DESKTOP
document.querySelector('#contactSubmit').addEventListener('click', function () {
    const name = document.querySelector('#clientName').value;
    const phone = document.querySelector('#clientPhone').value;
    const agree = document.querySelector('#clientAgree').checked;

    if (!name || !phone || agree === false) {
        document.querySelector('#modal').classList.remove('hidden');
        document.querySelector('body').classList.add('overflow-y-hidden');
        const error = `<i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                        <span class="tracking-tighter ml-[20px]">이름과 연락처를 입력해 주세요</span>`;
        document.querySelector('#modalMessage').innerHTML = error;
    }
    else if (name && phone && agree === true) {
        const url = 'http://210.99.223.38:8070/api/slack/send/contact';

        const tempData = {
            'name': name,
            'phoneNumber': phone
        };

        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tempData),
            redirect: 'follow'
        };


        fetch(url, options)
            .then(response => response.text())
            .then(result => {
                const success = `<i class="fa-sharp fa-solid fa-circle-check"></i>
                <span class="tracking-tighter ml-[20px]">접수 완료 !  담당자가 24 시간 내에 신속하게 연락 드리겠습니다  ^_^</span>`;
                document.querySelector('#modal').classList.remove('hidden');
                document.querySelector('body').classList.add('overflow-y-hidden');
                document.querySelector('#modalMessage').innerHTML = success;
            })
            .catch(error => console.log('error', error));
    }
})

document.querySelector('#modalClose').addEventListener('click', function () {
    document.querySelector('#modal').classList.add('hidden');
    document.querySelector('body').classList.remove('overflow-y-hidden');
    document.querySelector('#clientName').value = null;
    document.querySelector('#clientPhone').value = null;
    document.querySelector('#clientAgree').checked = false;
})

//FOR MOBILE
document.querySelector('#contactSubmitMobile').addEventListener('click', function () {
    const name = document.querySelector('#clientNameMobile').value;
    const phone = document.querySelector('#clientPhoneMobile').value;
    const agree = document.querySelector('#clientAgreeMobile').checked;

    if (!name || !phone || agree === false) { 
        document.querySelector('#formMessageMobile').classList.add('block');
        document.querySelector('#formMessageMobile').classList.remove('hidden');

        document.querySelector('#formMobile').classList.add('hidden');
        document.querySelector('#formMobile').classList.remove('block');


        const error = `<i class="fa-sharp fa-solid fa-circle-exclamation text-carmine text-[50px]"></i><span class="mb-[36px] text-center tracking-tighter leading-loose text-[18px] text-jungle opacity-60 font-bold">이름과 연락처를 입력해 주세요!</span>`;
        document.querySelector('#formMessageMobileContent').innerHTML = error;
    }
    else {
        const url = 'http://210.99.223.38:8070/api/slack/send/contact';
        const tempData = {
            'name': name,
            'phoneNumber': phone
        };

        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tempData),
            redirect: 'follow'
        };


        fetch(url, options)
            .then(response => response.text())
            .then(result => {
                document.querySelector('#formMessageMobile').classList.add('block');
                document.querySelector('#formMessageMobile').classList.remove('hidden');

                document.querySelector('#formMobile').classList.add('hidden');
                document.querySelector('#formMobile').classList.remove('block');

                const success = `<i class="fa-sharp fa-solid fa-circle-check text-[#5585FF] text-[50px]"></i>
                <span class="mb-[0px] text-center tracking-tighter leading-loose text-[18px] text-jungle opacity-60 font-bold">접수 완료 !  담당자가 24 시간 내에 <br> 신속하게 연락 드리겠습니다  ^_^</span>`;
                document.querySelector('#formMessageMobileContent').innerHTML = success;
            })
            .catch(error => console.log('error', error));
    }
})

document.querySelector('#contactGoBackMobile').addEventListener('click', function () {
    document.querySelector('#formMessageMobile').classList.add('hidden');
    document.querySelector('#formMessageMobile').classList.remove('block');

    document.querySelector('#formMobile').classList.remove('hidden');
    document.querySelector('#formMobile').classList.add('block');

    document.querySelector('#clientNameMobile').value = null;
    document.querySelector('#clientPhoneMobile').value = null;
    document.querySelector('#clientAgreeMobile').checked = false;
})