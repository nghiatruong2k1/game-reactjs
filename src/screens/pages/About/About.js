import { useEffect } from 'react';
import {memo,Fragment} from 'react';
import useGlobalTitle from '~/hooks/useGlobalTitle';
import { routers } from '~/router';
function AboutPageComponent(){
    useGlobalTitle(()=>{
        return routers.default.about.title
    },[]);
    return (
        <Fragment>
            About
        </Fragment>
    )
};export default memo(AboutPageComponent)