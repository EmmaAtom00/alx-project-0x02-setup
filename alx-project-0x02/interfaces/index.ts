export interface CardProps {
  title: string;
  content: string;
  //   footer?: string;
  //   isActive: boolean;
  //   onClick: () => void;
}

export interface PostModalProps {
  title?: string;
  content?: string;
  submitAction?: () => void;
  setTitle: (title: string) => void;
  setContent: (content: string) => void;
}
