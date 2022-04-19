import AWN from "awesome-notifications";

const note = new AWN({
    position: "top-right",
    animationDuration: 100,
    durations: {
        global: 2000
    }
});

const notify = {
    success: (msg) => note.success(msg),
    warning: (msg) => note.warning(msg),
    error: (msg) => note.alert(msg),
    info: (msg) => note.info
}

export default notify;