//------------------------//
//        IMPORTS         //
//------------------------//
import React from 'react';
import { render } from '@testing-library/react';

import RenderCustPro from '../components/pages/CustomerProfile/RenderCustPro';



//------------------------//
//        TESTS           //
//------------------------//

describe('<RenderCustPro /> test suite', () => {
    test("", () => {
        const { getElementsByClassName } = render(<RenderCustPro />)
        getElementsByClassName("customer-info-box")
    
    })
});