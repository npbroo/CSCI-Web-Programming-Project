//import {executeQuery} from "../../config/db"
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer'
import { ResetPassForm } from '../../components/ResetPassForm';
import { useState } from 'react';

//let db = require("../../database/db.json");

export default function Reset() {

    //render the form page
    return (
        <div>
            <Menu/>
            <ResetPassForm/>
            <Footer />
        </div>
    )
}