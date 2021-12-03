import React, { createRef } from 'react';

import Button from './Button';
import { ButtonProps } from './Button.types';

import { render, RenderFn } from '../../util/shared/render';
import { renderToHtml } from '../../util/shared/renderToHtml';
import { create } from '../../util/shared/create';
import { axe } from '../../util/shared';
import { CodeFilled } from '@escoleme/meicons-react';
import { act, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Button', () => {

  function renderButton<T>(renderFn: RenderFn<T>, props: ButtonProps) {
    return renderFn(<Button {...props} />);
  }

  const baseProps = { label: 'Button' };

  it('mount correctly', () => {
    const props: ButtonProps = {
      ...baseProps,
      disabled: true
    };
    const { unmount } = renderButton(render, props);
    
    expect(() => {
      unmount();
    }).not.toThrow();
  });

  describe('variants', () => {
    describe('Filled', () => {
      it('should render a filled button', () => {
        const wrapper = renderButton(create, {
          ...baseProps,
          variant: 'filled',
        });
        expect(wrapper).toMatchSnapshot();
      });
  
      it('should render a danger button', () => {
        const wrapper = renderButton(create, {
          ...baseProps,
          danger: true,
        });
        expect(wrapper).toMatchSnapshot();
      });
  
      it('should render a success button', () => {
        const wrapper = renderButton(create, {
          ...baseProps,
          success: true,
        });
        expect(wrapper).toMatchSnapshot();
      });
  
      it('should render a disabled button', () => {
        const wrapper = renderButton(create, {
          ...baseProps,
          disabled: true,
        });
        expect(wrapper).toMatchSnapshot();
      });
    })
    
    describe('Filled tonal', () => {
      it('should render a filled tonal button', () => {
        const wrapper = renderButton(create, {
          ...baseProps,
          variant: 'tonal',
        });
        expect(wrapper).toMatchSnapshot();
      });
  
      it('should render a danger button', () => {
        const wrapper = renderButton(create, {
          ...baseProps,
          danger: true,
          variant: 'tonal'
        });
        expect(wrapper).toMatchSnapshot();
      });
  
      it('should render a success button', () => {
        const wrapper = renderButton(create, {
          ...baseProps,
          success: true,
          variant: 'tonal'
        });
        expect(wrapper).toMatchSnapshot();
      });
    })
    
    describe('Outlined', () => {
      it('should render a outlined button', () => {
        const wrapper = renderButton(create, {
          ...baseProps,
          variant: 'outlined',
        });
        expect(wrapper).toMatchSnapshot();
      });
  
      it('should render a danger button', () => {
        const wrapper = renderButton(create, {
          ...baseProps,
          danger: true,
          variant: 'outlined'
        });
        expect(wrapper).toMatchSnapshot();
      });
  
      it('should render a success button', () => {
        const wrapper = renderButton(create, {
          ...baseProps,
          success: true,
          variant: 'outlined'
        });
        expect(wrapper).toMatchSnapshot();
      });
    })
    
    describe('Text', () => {
      it('should render a text button', () => {
        const wrapper = renderButton(create, {
          ...baseProps,
          variant: 'text',
        });
        expect(wrapper).toMatchSnapshot();
      });
  
      it('should render a danger button', () => {
        const wrapper = renderButton(create, {
          ...baseProps,
          danger: true,
          variant: 'text'
        });
        expect(wrapper).toMatchSnapshot();
      });
  
      it('should render a success button', () => {
        const wrapper = renderButton(create, {
          ...baseProps,
          success: true,
          variant: 'text'
        });
        expect(wrapper).toMatchSnapshot();
      });
    })
  });

  describe('styles', () => {
    it('should render a small button', () => {
      const wrapper = renderButton(create, {
        ...baseProps,
        size: "small",
      });
      expect(wrapper).toMatchSnapshot();
    });

    it('should render a medium button', () => {
      const wrapper = renderButton(create, {
        ...baseProps,
        size: "medium",
      });
      expect(wrapper).toMatchSnapshot();
    });

    it('should render a large button', () => {
      const wrapper = renderButton(create, {
        ...baseProps,
        size: "large",
      });
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('loading', () => {
    it('should render a button with loading styles', () => {
      const wrapper = renderButton(create, {
          ...baseProps,
          loading: true,
          loadingLabel: 'Loading',
      });
      expect(wrapper).toMatchSnapshot();
    });

    it('should render a button with loading styles and only icon', () => {
      const wrapper = renderButton(create, {
          loading: true,
      });
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('icon', () => {
    it('should render a button with left icon', () => {
      const wrapper = renderButton(create, {
          ...baseProps,
          icon: <CodeFilled style={{ fontSize: 18 }} />
      });

      expect(wrapper).toMatchSnapshot();
    });

    it('should render a button with right icon', () => {
      const wrapper = renderButton(create, {
          ...baseProps,
          icon: <CodeFilled style={{ fontSize: 18 }} />,
          iconAlign: 'right'
      });

      expect(wrapper).toMatchSnapshot();
    });

    it('should render a button with rtl', () => {
      const wrapper = renderButton(create, {
          ...baseProps,
          icon: <CodeFilled style={{ fontSize: 18 }} />,
          rtl: true
      });
      
      expect(wrapper).toMatchSnapshot();
    });

    it('should render a button with only an icon', () => {
      const wrapper = renderButton(create, {
          icon: <CodeFilled style={{ fontSize: 18 }} />,
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('disabled', () => {
    it('should not call the onClick handler when clicked', () => {
      const props: ButtonProps = { 
        ...baseProps,
        onClick: jest.fn(),
        disabled: true,
        variant: 'text',
        'data-testid': 'button'
      };
      const { getByTestId } = renderButton(render, props);

      const button = getByTestId('button');

      fireEvent.click(button)

      expect(props.onClick).toHaveBeenCalledTimes(0);
    });
  });

  describe('business logic', () => {
    it('should render as a link when passed the href prop', () => {
      const props = {
        ...baseProps,
        href: '#',
        onClick: jest.fn(),
        'data-testid': 'button'
      };

      const { getByTestId } = renderButton(render, props);
      const button = getByTestId('button');
      expect(button.tagName).toBe('A');
      expect(button).toHaveAttribute('href');
    });

    it('should render loading button with loading label', () => {
      const loadingLabel = 'Loading';
      const props = {
        ...baseProps,
        loading: true,
        loadingLabel,
      };

      const { getByText } = renderButton(render, props);
      expect(getByText(loadingLabel)).toBeVisible();
    });

    it('should call the onClick handler when clicked', async () => {
      const props = {
        ...baseProps,
        onClick: jest.fn(),
        'data-testid': 'button',
      };
      const { getByTestId } = renderButton(render, props);

      act(() => {
        userEvent.click(getByTestId('button'));
      });

      expect(props.onClick).toHaveBeenCalledTimes(1);
    });

    it('should not call the onClick handler when clicked with the disabledOnClick prop activated', async () => {
      const props = {
        ...baseProps,
        onClick: jest.fn(),
        'data-testid': 'button',
        disabledOnClick: true
      };
      const { getByTestId } = renderButton(render, props);

      act(() => {
        userEvent.click(getByTestId('button'));
      });

      expect(props.onClick).toHaveBeenCalledTimes(0);
    });

    it('should accept a working ref for a button', () => {
      const tref = createRef<any>();
      const { container } = render(
        <Button ref={tref} label="This is a button" />,
      );
      const button = container.querySelector('button');
      expect(tref.current).toBe(button);
    });

    it('should accept a working ref for a link', () => {
      const tref = createRef<any>();
      const { container } = render(
        <Button href="http://sumup.com" ref={tref} label="This is a button" />,
      );
      const button = container.querySelector('a');
      expect(tref.current).toBe(button);
    });
  });

  describe('link', () => {
    it('should render as a link when passed the href prop', () => {
      const props = { 
        ...baseProps,
        href: "#",
        onClick: jest.fn(),
        disabled: true,
        'data-testid': 'button'
      };
      const { getByTestId } = renderButton(render, props);

      const button = getByTestId('button');

      fireEvent.click(button)

      expect(props.onClick).toHaveBeenCalledTimes(0);
    });

    it('should render as a link when passed the href prop', () => {
      const props: ButtonProps = { 
        ...baseProps,
        href: "#",
        onClick: jest.fn(),
        disabled: true,
        variant: 'tonal',
        'data-testid': 'button'
      };
      const { getByTestId } = renderButton(render, props);

      const button = getByTestId('button');

      fireEvent.click(button)

      expect(props.onClick).toHaveBeenCalledTimes(0);
    });
    
    it('should render as a link when passed the href prop', () => {
      const props: ButtonProps = { 
        ...baseProps,
        href: "#",
        onClick: jest.fn(),
        disabled: true,
        variant: 'outlined',
        'data-testid': 'button'
      };
      const { getByTestId } = renderButton(render, props);

      const button = getByTestId('button');

      fireEvent.click(button)

      expect(props.onClick).toHaveBeenCalledTimes(0);
    });
    
    it('should render as a link when passed the href prop', () => {
      const props: ButtonProps = { 
        ...baseProps,
        href: "#",
        onClick: jest.fn(),
        disabled: true,
        variant: 'text',
        'data-testid': 'button'
      };
      const { getByTestId } = renderButton(render, props);

      const button = getByTestId('button');

      fireEvent.click(button)

      expect(props.onClick).toHaveBeenCalledTimes(0);
    });
  })

  describe('accessibility', () => {
    it('should meet accessibility guidelines', async () => {
      const wrapper = renderToHtml(<Button label="Button" />);
      const actual = await axe(wrapper);
      expect(actual).toHaveNoViolations();
    });

    it('should meet accessibility guidelines for Loading button', async () => {
      const wrapper = renderToHtml(
        <Button loading loadingLabel="Loading" />,
      );

      const actual = await axe(wrapper);
      expect(actual).toHaveNoViolations();
    });
  });
})