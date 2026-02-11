import classy from '../../assets/classy.jpg'
import doggo from '../../assets/doggo.jpg'
import glowing from '../../assets/glowing.JPG'
import goofy from '../../assets/goofy.png'
import sexy from '../../assets/sexy.JPG'
import sleepy from '../../assets/sleepy.PNG'
import annoyed from '../../assets/annoyed.jpg'
import cute from '../../assets/cute.jpg'
import me from '../../assets/me.jpg'

const poemSections = [
  {
    photo: cute,
    verse: `shawty doesn't like this photo, \nbeer, beach, baby looking pretty,\n what's not to love?`,
  },
  {
    photo: classy,
    verse: `shawty had some of the most fire fits back in the day, in big old UK`,
  },
  {
    photo: goofy,
    verse: `very demure. very classy. \nThe woman of my dreams everyone.`,
  },
  {
    photo: doggo,
    verse: `you see one dog and suddenly\nI don't exist anymore.\nit's fine. I'm not jealous.\n(I'm very jealous.)`,
  },
  {
    photo: me,
    verse: `you're not even trying here\nand you still look like that??\nthat's just disrespectful honestly.`,
  },
  {
    photo: sleepy,
    verse: `sleepy kuru with our kids russel and snorlax.\nboth of them are forgotten at this point.\nzero thoughts behind those eyes.`,
  },
  {
    photo: annoyed,
    verse: `this is the face I get\nright after I'vve said some dumb shit.\nstill cute though. annoyingly cute.`,
  },
  {
    photo: sexy,
    verse: `and then you go and look like THIS.\nlike hello?? Leave junior alone.\nhave some mercy woman.`,
  },
  {
    photo: glowing,
    verse: `you steal my clothes, you eat my snacks,\nyou hog the bed, you judge my music.\nand I wouldn't trade a single bit of it.\nhappy valentines kuru baba.\nyou're stuck with me.`,
  },
]

function PoemPage() {
  return (
    <div className="poem-page">
      <div className="poem-hero">
        <h1 className="poem-hero-title">For Kuru baba </h1>
        <p className="poem-hero-subtitle">take out your glasses cus I know you're blind</p>
        <div className="scroll-indicator">
          <span>scroll down</span>
          <div className="scroll-arrow" />
        </div>
      </div>

      {poemSections.map((section, i) => (
        <div className="poem-section" key={i}>
          <div className="poem-section-content">
            <div className="poem-photo-wrapper">
              <img
                className="poem-photo"
                src={section.photo}
                alt={`kuru ${i + 1}`}
                loading="lazy"
              />
            </div>
            <div className="poem-text-block">
              <p className="poem-verse">
                {section.verse.split('\n').map((line, j) => (
                  <span key={j}>
                    {line}
                    {j < section.verse.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      ))}

      <div className="poem-finale">
        <p className="poem-finale-text">
          ok fine I love you or whatever.
          <br />
          like a lot. an embarrassing amount actually.
        </p>
        <div className="poem-finale-heart">&#10084;&#65039;</div>
      </div>
    </div>
  )
}

export default PoemPage
