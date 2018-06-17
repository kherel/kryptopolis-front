/* eslint-env jest */
import onePageFormHoc from "HOC/onePageFormHOC";
import React, { Component } from "react";
import { shallow, mount, render } from "enzyme";


describe("one page form hoc", () => {
  let MockComponent, TestingComponent, config, hocWrapper, componentWrapper;

  beforeEach(() => {
    MockComponent = () => <div />;

    config = {
      setValues: () => {},
      validations: {}
    };
    TestingComponent = onePageFormHoc(MockComponent, config);
  });

  describe("basic behavior", () => {
    it("pass props inside component", () => {
      const componentWrapper = shallow(
        <TestingComponent includedProp="right!" />
      );
      expect(componentWrapper.props().includedProp).toBe("right!");
      expect(componentWrapper.props().includedProp).not.toBe("wrong!");
    });

    it("creates form values", () => {
      config.setValues = function() {
        return {
          test: "right!"
        };
      };

      TestingComponent = onePageFormHoc(MockComponent, config);

      const componentWrapper = mount(shallow(<TestingComponent />).get(0));

      expect(componentWrapper.props().values["test"]).toBe("right!");
    });

    it("creates form value using outside props", () => {
      config.setValues = function() {
        return {
          test: this.props.outsideValue
        };
      };

      TestingComponent = onePageFormHoc(MockComponent, config);

      const componentWrapper = mount(
        shallow(<TestingComponent outsideValue={"right!"} />).get(0)
      );

      expect(componentWrapper.props().values.test).toBe("right!");
    });

    it("has formValid false on initializing", () => {
      hocWrapper = shallow(<TestingComponent />);
      const componentWrapper = mount(hocWrapper.get(0));

      expect(hocWrapper.state().formValid).toBe(componentWrapper.props().formValid);
      expect(componentWrapper.props().formValid).toBe(false);
    });

    it("send state hoc values to component props values", () => {
      const values = { test: "right" };

      hocWrapper = shallow(<TestingComponent />);
      hocWrapper.setState({values})
      const componentWrapper = mount(hocWrapper.get(0));

      expect(hocWrapper.state().values).toEqual(values);
      expect(componentWrapper.props().values).toEqual(values);
    });

    it("send state hoc errors values to component props errors values", () => {
      const errors = { test: "right" };

      hocWrapper = shallow(<TestingComponent />);
      hocWrapper.setState({errors})
      const componentWrapper = mount(hocWrapper.get(0));

      expect(hocWrapper.state().errors).toEqual(errors);
      expect(componentWrapper.props().errors).toEqual(errors);
    });

    it("send methods handleChange and validateForm as props from hoc to component", () => {
      hocWrapper = shallow(<TestingComponent />);
      const hocInstant = hocWrapper.instance()
      const componentWrapper = mount(hocWrapper.get(0));

      expect(hocInstant.handleChange).toBe(componentWrapper.props().handleChange);
      expect(hocInstant.validateForm).toBe(componentWrapper.props().validateForm);
      });

  });

  describe('validation logic', () => {
    let hocInstant, mockSubmit
    describe('valid form', () => {
      beforeEach(()=>{
        config.setValues = function (){
          return{
            test: ''
          }
        }

        config.validations = {
          test: [data => data !== 'valid' && 'error, data not valid']
        }
        TestingComponent = onePageFormHoc(MockComponent, config);

        hocWrapper = shallow(<TestingComponent />);
        hocInstant = hocWrapper.instance()
        hocInstant.handleChange({test:'valid'})
      })


      it('invokes on submit function on validate form', () => {
        mockSubmit = jest.fn();
        hocInstant.validateForm(mockSubmit)

        // expect(instance.props().values.test).toBe('valid');
        expect(mockSubmit).toHaveBeenCalled();

      })
      it('set state form valid argument on true', () => {
        hocInstant.validateForm(() => {})
        expect(hocWrapper.state().formValid).toBeTruthy();
      })
    })

    describe('not valid form', () => {
      let componentWrapper, innerForm, mockSubmit;

      beforeEach(()=>{
        config.setValues = function (){
          return{
            test: ''
          }
        }

        config.validations = {
          test: [data => data === 'right' || 'not valid']
        }

        TestingComponent = onePageFormHoc(MockComponent, config);


        hocWrapper = shallow(<TestingComponent />)
        innerForm = mount(hocWrapper.get(0))
        mockSubmit = jest.fn();

      })

      it('doesn\'t invoke on submit on validate form', () => {
        innerForm.props().handleChange({test: 'wrong!'})
        innerForm.props().validateForm(mockSubmit)

        expect(mockSubmit).not.toHaveBeenCalled();

      })

      it('set state form valid argument on false', () => {
        hocWrapper.setState({formValid: true})
        innerForm = mount(hocWrapper.get(0))
        expect(hocWrapper.state().formValid).toBeTruthy();

        innerForm.props().handleChange({test: 'wrong!'})
        innerForm.props().validateForm(() => {})
        expect(hocWrapper.state().formValid).toBeFalsy();
      })

      it('set error text', () => {
        innerForm = mount(hocWrapper.get(0))

        innerForm.props().handleChange({test: 'wrong!'})
        innerForm.props().validateForm(() => {})
        expect(hocWrapper.state().errors.test).toBe('not valid');
      })

      it('remove error text, on change', () => {
        innerForm = mount(hocWrapper.get(0))

        innerForm.props().handleChange({test: 'wrong!'})
        innerForm.props().validateForm(() => {})
        innerForm.props().handleChange({test: 'again'})
        expect(hocWrapper.state().errors.test).toBeUndefined();
      })

      it('doen\'t set error before handle change', () => {
        innerForm = mount(hocWrapper.get(0))

        innerForm.props().handleChange({test: 'wrong!'})
        expect(hocWrapper.state().errors.test).toBeUndefined();
      })
    })
  })
});
