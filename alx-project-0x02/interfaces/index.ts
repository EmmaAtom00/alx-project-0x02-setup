export interface LayoutProps {
  children: React.ReactNode;
}

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
  submitAction?: ({
    title,
    content,
  }: {
    title: string;
    content: string;
  }) => void;
}

export interface ButtonProps {
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  children?: React.ReactNode;
  onClick?: () => void;
}

export interface PostProps {
  title: string;
  content: string;
  userId: number;
}