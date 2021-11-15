import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import Button from '../Button';
import {IButtonProps} from '../Button.types';
import docs from './Button.docs.mdx';
import dedent from 'dedent'
import Wrapper from '../../../../../../.storybook/components/Wrapper';
import { CodeOutlined } from '@escoleme/meicons-react';

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [
    (Story) => (
      <Wrapper>
        <Story />
      </Wrapper>
    )
  ],
  parameters: {
    docs: { 
      page: docs,
    }
  },
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio'},
      description: "Defina o tamanho do botão, o padrão é medium.",
      table: {
        defaultValue: { summary: '"medium"' },
      }
    },
    variant: {
      options: ["filled", 'tonal', "outlined", "text"],
      control: { type: 'radio'},
      description: "Defina 4 tipos de botões, o padrão é filled.",
      table: {
        defaultValue: { summary: '"filled"' },
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
        defaultValue: { summary: "false" },
      }
    },
    target: {
      options: ['_black', '_self', '_parent', '_top'],
      control: { type: 'select'},
      description: "Define como o navegador deve redirecionar o link"
    },
    label: {
      description: "Defina o texto do botão.",
      control: { type: 'text'},
    },
    loadingLabel: {
      description: "Defina o texto do botão quando estiver com status de carregando.",
      control: { type: 'text'},
    },
    onClick: {
      description: "Define a função do botão quando for clicado.",
      table: {
        defaultValue: { summary: "Function" },
      }
    },
    className: {
      description: "Defina a class (html) do botão.",
      control: { type: 'select'},
    },
    id: {
      description: "Defina o id (html) do botão.",
      control: { type: 'select'},
    },
    type: {
      options: ["button", "submit", "reset"],
      control: { type: 'select'},
      description: "Tipo HTML do botão.",
      table: {
        defaultValue: { summary: "button" },
      }
    },
    href: {
      description: "Defina a URL para navegar quando o botão é clicado.",
      control: { type: 'text'},
    },
    rtl: {
      options: [false, true],
      description: "Aplica RTL ao botão.",
      table: {
        defaultValue: { summary: "false" },
      }
    },
  }
} as ComponentMeta<any>;

export const Base: Story<IButtonProps> = (args: IButtonProps) => <Button {...args} />

Base.args = {
  variant: 'filled',
  href: undefined,
  type: 'button',
  target: undefined,
  disabled: false,
  block: false,
  onClick: () => alert("Hello World!"),
  loading: false,
  label: 'Click me',
  success: false,
  danger: false,
  rtl: false,
}

Base.parameters = {
  docs: {
    source: {
      code: dedent(`
        <Button label="Filled" />
      `),
      language: 'jsx'
    }
  }
};

export const Variants = (args: IButtonProps) => (
  <>
    <Button
      {...args}
      variant="filled"
      label="Filled"
    />
    <Button
      {...args}
      variant="tonal"
      label="Filled Tonal"
    />
    <Button
      {...args}
      variant="outlined"
      label="Outlined"
    />
    <Button
      {...args}
      variant="text"
      label="Text"
    />
  </> 
);

Variants.parameters = {
  docs: {
    source: {
      code: dedent(`
        <Button
          variant="filled"
          label="Filled"
        />
        <Button
          variant="tonal"
          label="Filled Tonal"
        />
        <Button
          variant="outlined"
          label="Outlined"
        />
        <Button
          variant="text"
          label="Text"
        />
      `),
      language: 'jsx'
    }
  }
};

export const Danger = (args: IButtonProps) => (
  <>
    <Button
      {...args}
      variant="filled"
      danger
      label="Filled"
    />
    <Button
      {...args}
      variant="tonal"
      danger
      label="Filled Tonal"
    />
    <Button
      {...args}
      variant="outlined"
      danger
      label="Outlined"
    />
    <Button
      {...args}
      variant="text"
      danger
      label="Text"
    />
  </>
);

Danger.parameters = {
  docs: {
    source: {
      code: dedent(`
        <Button
          variant="filled"
          danger
          label="Filled"
        />
      `),
      language: 'jsx'
    }
  }
};

export const Size = (args: IButtonProps) => (
  <>
    <Button
      {...args}
      size="small"
      label="Small"
    />
    <Button
      {...args}
      label="Medium"
    />
    <Button
      {...args}
      size="large"
      label="Large"
    />
  </>
);

Size.parameters = {
  docs: {
    source: {
      code: dedent(`
        <Button
          size="small"
          label="Small"
        />
        <Button
          label="Medium"
        />
        <Button
          size="large"
          label="Large"
        />
      `),
      language: 'jsx'
    }
  }
};

export const Block = (args: IButtonProps) => (
  <>
    <Button
      {...args}
      block
      label="block"
    />
  </>
);

Block.parameters = {
  docs: {
    source: {
      code: dedent(`
        <Button block label="block" />
      `),
      language: 'jsx'
    }
  }
};

export const Ellipsis = (args: IButtonProps) => (
  <div style={{
    width: '30%',
    display: 'flex',
    justifyContent: 'center'
  }}>
    <Button
      {...args}
      block
      label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    />
  </div>
);

Ellipsis.parameters = {
  docs: {
    source: {
      code: dedent(`
        <Button
          block
          label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        />
      `),
      language: 'jsx'
    }
  }
};

export const Disable = (args: IButtonProps) => (
  <>
    <Button
      {...args}
      disabled
      variant="filled"
      label="Filled"
    />
    <Button
      {...args}
      disabled
      variant="tonal"
      label="Filled tonal"
    />
    <Button
      {...args}
      disabled
      variant="outlined"
      label="Outlined"
    />
    <Button
      {...args}
      disabled
      variant="text"
      label="Text"
    />
  </>
);

Disable.parameters = {
  docs: {
    source: {
      code: dedent(`
        <Button
          disabled
          variant="filled"
          label="Filled"
        />
      `),
      language: 'jsx'
    }
  }
};

export const Loading = (args: IButtonProps) => (
  <>
    <Button
      {...args}
      loading
      variant="filled"
      label="Filled"
    />
    <Button
      {...args}
      loading
      variant="tonal"
      label="Filled tonal"
    />
    <Button
      {...args}
      loading
      variant="outlined"
      label="Outlined"
    />
    <Button
      {...args}
      loading
      variant="text"
      label="Text"
    />
  </>
);

Loading.parameters = {
  docs: {
    source: {
      code: dedent(`
        <Button
          loading
          variant="filled"
          label="Filled"
        />
      `),
      language: 'jsx'
    }
  }
};

export const Success = (args: IButtonProps) => (
  <>
    <Button
      {...args}
      success
      variant="filled"
      label="Filled"
    />
    <Button
      {...args}
      success
      variant="tonal"
      label="Filled tonal"
    />
    <Button
      {...args}
      success
      variant="outlined"
      label="Outlined"
    />
    <Button
      {...args}
      success
      variant="text"
      label="Text"
    />
  </>
);

Success.parameters = {
  docs: {
    source: {
      code: dedent(`
        <Button
          success
          variant="filled"
          label="Filled"
        />
      `),
      language: 'jsx'
    }
  }
};

export const Icon = (args: IButtonProps) => (
  <>
    <Button
      {...args}
      icon={<CodeOutlined style={{ fontSize: 18 }} />}
      iconAlign="left"
      label="Icon align to left"
      variant="filled"
    />
  </>
);

Icon.parameters = {
  docs: {
    source: {
      code: dedent(`
        <Button
          icon={<CodeOutlined style={{ fontSize: 18 }} />}
          label="Icon align to left"
          variant="filled"
        />
      `),
      language: 'jsx'
    }
  }
};

export const RTL = (args: IButtonProps) => (
  <>
    <Button
      {...args}
      icon={<CodeOutlined style={{ fontSize: 18 }} />}
      variant="filled"
      rtl
      label="Left icon"
    />
  </>
);

RTL.parameters = {
  docs: {
    source: {
      code: dedent(`
        <Button
          icon={<CodeOutlined style={{ fontSize: 18 }} />}
          variant="filled"
          rtl
          label="Left icon"
        />
      `),
      language: 'jsx'
    }
  }
};

export const LoadingLabel = (args: IButtonProps) => (
  <>
    <Button
      {...args}
      loading
      variant="filled"
      label="Filled"
      loadingLabel="Loading"
    />
  </>
);

LoadingLabel.parameters = {
  docs: {
    source: {
      code: dedent(`
        <Button
          loading
          variant="filled"
          label="Filled"
          loadingLabel="Loading"
        />
      `),
      language: 'jsx'
    }
  }
};

export const OnlyIcon = (args: IButtonProps) => (
  <>
    <Button
        {...args}
        icon={<CodeOutlined style={{ fontSize: 18 }} />}
        iconAlign="left"
        variant="filled"
      />
    <Button
        {...args}
        icon={<CodeOutlined style={{ fontSize: 18 }} />}
        iconAlign="left"
        variant="tonal"
      />
    <Button
        {...args}
        icon={<CodeOutlined style={{ fontSize: 18 }} />}
        iconAlign="left"
        variant="outlined"
      />
    <Button
        {...args}
        icon={<CodeOutlined style={{ fontSize: 18 }} />}
        iconAlign="left"
        variant="text"
      />
  </>
);

OnlyIcon.parameters = {
  docs: {
    source: {
      code: dedent(`
          <Button
            icon={<CodeOutlined style={{ fontSize: 18 }} />}
            iconAlign="left"
            variant="filled"
          />
      `),
      language: 'jsx'
    }
  }
};

export const Type = (args: IButtonProps) => (
  <>
    <Button
      {...args}
      type="submit"
      label="Filled"
      variant="filled"
    />
    <Button
      {...args}
      type="submit"
      label="Outlined"
      variant="outlined"
    />
    <Button
      {...args}
      type="submit"
      label="Text"
      variant="text"
    />
    <Button
      {...args}
      type="submit"
      label="Filled tonal"
      variant="tonal"
    />
  </>
);

Type.parameters = {
  docs: {
    source: {
      code: dedent(`
        <Button
          type="submit"
          label="Filled"
          variant="filled"
        />
      `),
      language: 'jsx'
    }
  }
};

export const Href = (args: IButtonProps) => (
  <>
    <Button
      {...args}
      href="#"
      label="Filled"
      variant="filled"
    />
    <Button
      {...args}
      href="#"
      label="Outlined"
      variant="outlined"
    />
    <Button
      {...args}
      href="#"
      label="Text"
      variant="text"
    />
    <Button
      {...args}
      href="#"
      label="Filled tonal"
      variant="tonal"
    />
  </>
);

Href.parameters = {
  docs: {
    source: {
      code: dedent(`
        <Button
          href="#"
          label="Filled"
          variant="filled"
        />
      `),
      language: 'jsx'
    }
  }
};