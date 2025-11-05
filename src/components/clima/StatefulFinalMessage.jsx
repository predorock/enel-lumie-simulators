import { executeAction } from "../../store/executeAction";
import useAppStore from "../../store/useAppStore";
import FinalMessage from "../ui/FinalMessage";
export default function StatefulFinalMessage({ title = "", onSendAction = "", onPrintAction = "", ...props }) {

    const state = useAppStore();

    const email = state.getCustomerData().email

    const onSend = () => executeAction(state, onSendAction);
    const onPrint = () => executeAction(state, onPrintAction);

    return (
        <FinalMessage
            title={title}
            email={email}
            onSend={onSend}
            onPrint={onPrint}
            {...props}
        />
    );
}
