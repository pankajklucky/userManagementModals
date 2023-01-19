import { useContext } from "react"
import { AlertContext} from "./Context";


const withProvider = (provider) => {

    const MyHoc = (IncomingComponent) => {
        const OutgoingComponent = (props) => {
            
            const contextData = useContext(provider);
            return <IncomingComponent {...props} {...contextData}/>
        }
        return OutgoingComponent;
    }
    return MyHoc;
}
export default withProvider;
export const withAlert = withProvider(AlertContext);
