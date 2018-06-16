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


      it('invokes on submit function if value is valid', () => {
        mockSubmit = jest.fn();
        hocInstant.validateForm(mockSubmit)

        // expect(instance.props().values.test).toBe('valid');
        expect(mockSubmit).toHaveBeenCalled();

      })
      it('makes form valid', () => {
        hocInstant.validateForm(() => {})
        expect(hocWrapper.state().formValid).toBe(true);
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


        componentWrapper = shallow(<TestingComponent />)
        innerForm = mount(componentWrapper.get(0))
        mockSubmit = jest.fn();

        innerForm.props().handleChange({test: 'wrong!'})
        innerForm.props().validateForm(mockSubmit)

      })

      it('doesn\'t invoke on submit', () => {
        mockSubmit = jest.fn();

        expect(mockSubmit).not.toHaveBeenCalled();

      })
    })

  })
});
