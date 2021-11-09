import React from 'react';
import { ComponentStory, ComponentMeta, Story } from '@storybook/react';
import Button from './Button';
import {IButtonProps} from './Button.types';
import docs from './Button.docs.mdx';
import dedent from 'dedent'
import { Wrapper } from '../../../../../.storybook/components';

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [
    (Story) => (
      <Wrapper>
        <Story />
      </Wrapper>
    ),
  ],
  parameters: {
    docs: { 
      page: docs,
    }
  },
  argTypes: {
    size: {
      options: ['small', 'normal', 'large', 'big'],
      control: { type: 'select'},
      description: "Defina o tamanho do botão, o padrão é normal.",
      table: {
        defaultValue: { summary: '"normal"' },
      }
    },
    uppercase: {
      options: [false, true],
      description: "Defina se o botão vai ter texto uppercase, o padrão é false.",
      table: {
        defaultValue: { summary: false },
      }
    },
    block: {
      options: [false, true],
      description: "Define a largura do botão em 100% do elemento parent.",
      table: {
        defaultValue: { summary: "false" },
      }
    },
    success: {
      options: [false, true],
      description: "Define se o botão vai ter estado de bem-sucedido",
      table: {
        defaultValue: { summary: "false" },
      }
    },
    disabled: {
      options: [false, true],
      description: "Desativa o botão visualmente e funcionamente.",
      table: {
        defaultValue: { summary: "false" },
      }
    },
    loading: {
      options: [false, true],
      description: "Torna o botão inativo apenas visuamente e mostra um loading spinner.",
      table: {
        defaultValue: { summary: "false" },
      }
    },
    danger: {
      options: [false, true],
      description: "Muda a cor do botão para vermelho para sinalizar ao usuário que a ação é irreversível ou perigosa.",
      table: {
        defaultValue: { summary: "" },
      }
    },
    target: {
      options: ['', '_black', '_self', '_parent', '_top'],
      control: { type: 'select'},
      description: "Define como o navegador deve redirecionar o link",
      table: {
        defaultValue: { summary: "" },
      }
    },
    variant: {
      options: ["contained", "outlined", "text"],
      control: { type: 'select'},
      description: "Defina 4 tipos de botões, o padrão é contained.",
      table: {
        defaultValue: { summary: '"contained"' },
      }
    },
    children: {
      description: "Defina o conteúdo do botão.",
    },
    onClick: {
      description: "Define a função do botão quando for clicado.",
      table: {
        defaultValue: { summary: "Function" },
      }
    },
    className: {
      description: "Defina a class (html) do botão.",
    },
    id: {
      description: "Defina o id (html) do botão.",
    },
    type: {
      description: "Tipo HTML do botão.",
    },
    href: {
      description: "Defina a URL para navegar quando o botão é clicado.",
    },
  }
} as ComponentMeta<any>;

export const Base: Story<IButtonProps> = (args: IButtonProps) => <Button {...args} />

Base.args = {
  onClick: () => alert("oi"),
  children: 'Click me',
  variant: 'filled',
}

export const Variants = (args: IButtonProps) => (
  <>
    <Button {...args}  variant="filled">
      Filled
    </Button>
    <Button {...args}  variant="tonal">
      Filled Tonal
    </Button>
    <Button {...args} variant="outlined">
      Outlined
    </Button>
    <Button {...args}  variant="text">
      Text
    </Button>
  </> 
);

Variants.parameters = {
  docs: {
    source: {
      code: dedent(`
      <Button {...args} variant="filled">
        Contained
      </Button>
    
      <Button {...args} variant="outlined">
        Outlined
      </Button>
    
      <Button {...args} variant="text">
        Text
      </Button>
      `),
      language: 'jsx'
    }
  }
};

export const Danger = (args: IButtonProps) => (
  <>
    <Button {...args} danger variant="filled">
      Filled
    </Button>
    <Button {...args} danger  variant="tonal">
      Filled Tonal
    </Button>
    <Button {...args} danger variant="outlined">
      Outlined
    </Button>
    <Button {...args} danger variant="text">
      Text
    </Button>
  </>
);

export const Size = (args: IButtonProps) => (
  <>
    <Button {...args} size="small">
      Contained
    </Button>
    <Button {...args} size="normal">
      Outlined
    </Button>
    <Button {...args} size="large">
      Text
    </Button>
    <Button {...args} size="big">
      Text
    </Button>
  </>
);

export const Block = (args: IButtonProps) => (
  <>
    <Button {...args} block>
      Contained
    </Button>
  </>
);

export const Disable = (args: IButtonProps) => (
  <>
    <Button {...args} disabled variant="filled">
      Filled
    </Button>
    <Button {...args} disabled variant="tonal">
      Filled Tonal
    </Button>
    <Button {...args} disabled variant="outlined">
      Outlined
    </Button>
    <Button {...args} disabled variant="text">
      Text
    </Button>
  </>
);

export const Loading = (args: IButtonProps) => (
  <>
    <Button {...args} loading variant="filled">
      Filled
    </Button>
    <Button {...args} loading variant="tonal">
      Filled Tonal
    </Button>
    <Button {...args} loading variant="outlined">
      Outlined
    </Button>
    <Button {...args} loading variant="text">
      Text
    </Button>
  </>
);

export const Success = (args: IButtonProps) => (
  <>
    <Button {...args} success variant="filled">
      Filled
    </Button>
    <Button {...args} success variant="tonal">
      Filled Tonal
    </Button>
    <Button {...args} success variant="outlined">
      Outlined
    </Button>
    <Button {...args} success variant="text">
      Text
    </Button>
  </>
);

export const Type = (args: IButtonProps) => (
  <>
    <Button {...args} type="submit" variant="filled">
      Filled
    </Button>
    <Button {...args} type="submit" variant="tonal">
      Filled Tonal
    </Button>
    <Button {...args} type="submit" variant="outlined">
      Outlined
    </Button>
    <Button {...args} type="submit" variant="text">
      Text
    </Button>
  </>
);

export const Href = (args: IButtonProps) => (
  <>
    <Button {...args} href="#" variant="filled">
      Filled
    </Button>
    <Button {...args} href="#" variant="tonal">
      Filled Tonal
    </Button>
    <Button {...args} href="#" variant="outlined">
      Outlined
    </Button>
    <Button {...args} href="#" variant="text">
      Text
    </Button>
  </>
);

export const OnColor = (args: IButtonProps) => (
  <>
    <Button {...args} tabIndex={9} onColor variant="filled">
      Filled
    </Button>
    <Button {...args} onColor variant="outlined">
      Outlined
    </Button>
    <Button {...args} onColor variant="text">
      Text
    </Button>
    <Button {...args} onColor variant="tonal">
      Filled Tonal
    </Button>
  </>
);