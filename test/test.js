import { sum, square, variable, MyClass } from '../app/scripts/modules/common_module.js';

describe('ES6 Foo', function () {

    let foo;

    var cred = {
        name: 'Ritesh Kumaro',
        enrollmentNo: 11115078
    }

    beforeEach(()=>{
        foo = new MyClass(cred);
    });

    it('should return Do Something when calling doSomething', ()=>{
        expect(foo.getName()).toEqual('Ritesh Kumaro');
    });

});
