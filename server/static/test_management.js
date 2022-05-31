(function () {
    const createTestForm = document.getElementById("create-test-form");

    /**
     * Create new test config
     */
    createTestForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = e.target;
        const payload = {
            course_id: form.course_id.value,
            lesson_id: form.lesson_id.value,
            test_user_num: form.test_user_num.value,
            target_ptc_id: form.target_ptc_id.value || null,
            with_local_tester: form.with_local_tester.checked,
        }

        fetch(form.action, {
            method: form.method.toUpperCase(),
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }).then(_ => {
            // window.location.reload();
        })
    })

    /**
     * Manipulate active test config
     */
    const activeInfoForm = document.getElementById("active-info");
    document.getElementById("start-test").addEventListener('click', (e) => {
        e.preventDefault();

        const url = activeInfoForm.dataset.startUrl;
        const payload = { duration: activeInfoForm.duration.value || null }

        if (payload.duration == null) {
            window.alert("시간 값을 입력해주세요.")
            return;
        }

        fetch(url, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }).then(_ => {
            // window.location.reload();
        })
    })
    document.getElementById("modify-test").addEventListener('click', (e) => {
        e.preventDefault();

        const url = activeInfoForm.dataset.startUrl;
        const payload = {
            target_ptc_id: activeInfoForm.target_ptc_id.value || null,
            duration: activeInfoForm.duration.value || null,
        }

        fetch(url, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }).then(_ => {
            // window.location.reload();
        })
    })
    document.getElementById("delete-test").addEventListener('click', (e) => {
        e.preventDefault();

        const url = activeInfoForm.dataset.deleteUrl;
        fetch(url, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' },
        }).then(_ => {
            window.location.reload();
        })
    })

    const remainingTime = document.getElementById("test-remaining");
    const endDate = new Date(remainingTime.dataset.endAt);
    
    setInterval(() => {
        remainingTime.value = intComma(parseInt((endDate.getTime() - new Date().getTime()) / 1000))
    }, 1000)

}())