import styles from '@/app/home.module.css'
import Image from 'next/image'
import SnakeGame from './components/snake-game/snake-game'
import Button from './components/button/button'

export default function Home() {
  return <section className={styles.home}>
    <div className={styles.content}>
      <span className={styles.greetings}>Hi all. I am</span>
      <h1 className={styles.title}>Dmytro Shulyachenko</h1>
      <div className={styles.role}>&gt; Software developer</div>
      <div className={styles.comment}>// complete the game to continue</div>
      <div className={styles.comment}>// you can also check my Github page</div>
      <div className={styles.code}>
        <span className={styles.variable}>const</span>
        <span className={styles.variable_name}>githubLink</span>
        =
        <a href="#" target="_blank">“https://github.com/example/url”</a>
      </div>
    </div>
    <div className={styles.game_wrapper}>
      <Image className={styles.green_blur} src="/green-blur.svg" alt='none' width={454} height={492} />
      <Image className={styles.blue_blur} src="/blue-blur.svg" alt='none' width={454} height={492} />
      <div className={styles.game}>
        <Image className={styles.bolt_up_left} src="/bolt-up-left.svg" width={15} height={15} alt='' />
        <Image className={styles.bolt_up_right} src="/bolt-up-right.svg" width={15} height={15} alt='' />
        <Image className={styles.bolt_down_left} src="/bolt-down-left.svg" width={15} height={15} alt='' />
        <Image className={styles.bolt_down_right} src="/bolt-down-right.svg" width={15} height={15} alt='' />
        <div className={styles.play}>
          <SnakeGame />
        </div>
        <div className={styles.hint}>
          <div className={styles.keyboards}>
            <div className={styles.hint_comment}>// use keyboard</div>
            <div className={styles.hint_comment}>// arrows to play</div>
            <div className={styles.keyboard}>
              <img src="/up-arrow.svg" alt="keyboard up" />
              <img src="/left-arrow.svg" alt="keyboard left" />
              <img src="/up-arrow.svg" alt="keyboard down" />
              <img src="/left-arrow.svg" alt="keyboard right" />
            </div>
          </div>
          <div className={`${styles.hint_comment} ${styles.snake_food_title}`}>// food left</div>
          <div className={styles.snake_food}>
            <Image src="/snake-food.svg" width={20.69} height={20.69} alt={''} />
            <Image src="/snake-food.svg" width={20.69} height={20.69} alt={''} />
            <Image src="/snake-food.svg" width={20.69} height={20.69} alt={''} />
            <Image src="/snake-food.svg" width={20.69} height={20.69} alt={''} />
            <Image src="/snake-food.svg" width={20.69} height={20.69} alt={''} />
            <Image src="/snake-food.svg" width={20.69} height={20.69} alt={''} />
            <Image src="/snake-food.svg" width={20.69} height={20.69} alt={''} />
            <Image src="/snake-food.svg" width={20.69} height={20.69} alt={''} />
            <Image src="/snake-food.svg" width={20.69} height={20.69} alt={''} />
            <Image src="/snake-food.svg" width={20.69} height={20.69} alt={''} />
          </div>
        </div>
        <Button className={styles.game_skip} ghost>skip</Button>
      </div>
    </div>

  </section>
}
