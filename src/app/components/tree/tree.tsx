'use client'

import { TreeType } from "@/global/types"
import styles from "./tree.module.css";
import { ReactNode, useState } from "react";
import Image from "next/image";

type TreeProps = {
  tree: TreeType[]
}

export default function Tree({ tree }: TreeProps) {
  const [initialTree, setInitialTree] = useState(tree);
  const generateFiles = (files: TreeType[]): ReactNode => {
    return files.map(({ title, includedTree }) => {
      return <>
        <div className={styles.file}>{title}</div>
        {includedTree && generateTree(includedTree)}
      </>
    })
  }

  const onToggleTree = () => {

  }

  const generateTree = (tree: TreeType[] = []) => {
    return tree.map(({ title, includedTree = [], extention, isRoot, isClosed }) => {
      return <>
        <div className={`${styles.folder} ${isRoot && styles.root}`}>
          {isRoot && <Image src="/tree-root-arrow.svg" width={8} height={6} alt="" />}
          {(!isRoot && extention === 'FOLDER') && <Image src="/tree-common-arrow.svg" width={13} height={12} alt="" />}
          <div className={styles.title}>{title}</div>
        </div>
        {extention === 'FILE' && generateFiles(includedTree)}
        {(extention === 'FOLDER' && !isClosed) && <div className={styles.subtree}>
          {generateTree(includedTree)}
        </div>}
      </>
    })
  }

  return (
    <div className={styles.tree}>{generateTree(initialTree)}</div>
  )
}
