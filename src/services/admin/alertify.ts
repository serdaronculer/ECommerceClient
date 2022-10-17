const message = (message: string, options: Partial<AlertifyOptions>) => {
    window.alertify.set("notifier", "delay", options.delay);
    window.alertify.set("notifier", "position", options.position);
    const msj = window.alertify[options.messageType!](message);
    if (options.dismissOthers)
        msj.dismissOthers();

}
const dismissAll = () => {
    window.alertify.dismissAll();
}
enum MessageType {
    ERROR = "error",
    MESSAGE = "message",
    NOTIFY = "notify",
    SUCCES = "success",
    WARNING = "warning"
}
enum Position {
    TOP_CENTER = "top-center",
    TOP_RIGHT = "top-right",
    TOP_LEFT = "top-left",
    BOTTOM_RIGHT = "bottom-right",
    BOTTOM_CENTER = "bottom-center",
    BOTTOM_LEFT = "bottom-left"
}
class AlertifyOptions {
    delay: number = 3;
    messageType: MessageType = MessageType.SUCCES;
    position: Position = Position.BOTTOM_RIGHT;
    dismissOthers: boolean = false;
}

export { message, AlertifyOptions, dismissAll, MessageType, Position }