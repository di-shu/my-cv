import { Tab, TreeType } from "@/global/types"
import Tabs from "../components/tabs/tabs"
import styles from "./about.module.css"
import Tree from "../components/tree/tree"

const TABS: Tab[] = [
  {
    type: 'professional-info',
    title: 'professional-info',
    icon: '/professional-info.svg'
  },
  {
    type: 'personal-info',
    title: 'personal-info',
    icon: '/personal-info.svg'
  },
  {
    type: 'hobbies',
    title: 'hobbies',
    icon: '/hobbies.svg'
  }
]

const TREE: TreeType[] = [
  {
    title: 'personal-info',
    extention: "FOLDER",
    isRoot: true,
    includedTree: [
      {
        title: 'education',
        extention: "FOLDER",
        includedTree: [
          {
            title: 'high-school',
            extention: 'FILE'
          },
          {
            title: 'university',
            extention: 'FILE'
          }
        ]
      }
    ]
  }
]

export default function About() {

  return <section className={styles.section_about}>
    <Tabs tabs={TABS} />
    <Tree tree={TREE} />
  </section>
}
