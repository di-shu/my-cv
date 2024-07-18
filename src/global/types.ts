export type Tab = {
  title: string;
  type: string;
  icon?: string;
};

export type TreeExtentionType = "FOLDER" | "FILE";

export type TreeType = {
  title: string;
  isRoot?: boolean;
  extention: TreeExtentionType;
  includedTree?: TreeType[];
  isClosed?: boolean;
};

// export type Subtree = Pick<Tree, 'title'> & {
//   extention: TreeType
// }
