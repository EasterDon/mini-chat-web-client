import { message } from 'ant-design-vue';
export const error_handler = (error: unknown) => {
  if (error instanceof Error) {
    message.error(error.message);
    return;
  }
};
