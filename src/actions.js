import {INC, DEC, RES} from './types';

const inc = () => ({
    type: INC
});

const dec = () => ({
    type: DEC
});

const res = () => ({
    type: RES
});

export {
    inc, 
    dec,
    res
}