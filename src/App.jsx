import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

// Styled Components for Full-Screen Layout
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
  background: linear-gradient(34deg,rgb(251, 171, 126) 0%,rgb(247, 206, 104) 100%);
  font-family: "Poppins", sans-serif;
`;

const Card = styled(motion.div)`
  min-width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(12px);
  color: white;
  font-family: "Amatic SC", serif; /* Apply Amatic SC font */
`;

const ScheduleBox = styled.div`
  background: rgba(251, 171, 126, 0.3);
  padding: 20px;
  border-radius: 12px;
  width: 90%;
  max-width: 300px;
  font-family: "Rubik Scribble", serif,; /* Apply Rubik Scribble font */
`;

const PersonalImage = styled.img`
  background: shulikuli.jpg;
  width: 100vw;
  max-width: 400px;
  border-radius: 12px;
  margin-bottom: 15px;
  
`;

const GiftGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  max-width: 400px;
`;

const GiftItem = styled.img`
  width: 400px;
  height: 125px;
  border-radius: 10px;
  object-fit: cover;
  
`;
const PersonalMessageCard = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: black;
  background: url("/shulikuli.jpg") center/cover no-repeat fixed; /* ✅ Fixed background */
  position: absolute;
  top: ;
  left: 0;
  font-family: "Amatic SC", serif; /* Apply Amatic SC font */
  
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(251, 171, 126, 0.5); /* ✅ Semi-transparent dark overlay */
    backdrop-filter: blur(1px); /* ✅ Soft blur effect */
  }
`;

/* ✅ Add a Scrollable Content Wrapper */
const MessageContent = styled.div`
  position: relative; /* ✅ Ensures content is above overlay */
  width: 90%;
  max-width: 600px;
  height: 80vh; /* ✅ Limit height */
  background: rgba(255, 255, 255, 0.12); /* ✅ Semi-transparent background */
  border-radius: 15px;
  backdrop-filter: blur(1px);
  padding: 20px;
  overflow-y: auto; /* ✅ Enables vertical scrolling */
  text-align: rtl;
  scrollbar-width: none; /* ✅ Thin scrollbar for a clean look */
  scrollbar-color: rgba(255, 255, 255, 0.5) transparent;
  font-family: "Rubik Scribble", serif; /* Apply Rubik Scribble font */

  /* ✅ Hide scrollbar for WebKit browsers */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
  }
`;






// Main App Component
export default function App() {
  const [index, setIndex] = useState(1); // 1 = Schedule, 0 = Personal Message, 2 = Gifts
  const cards = ["PersonalMessage", "Schedule", "Gifts"];

  // Swipe Logic
  const handleDragEnd = (_, { offset, velocity }) => {
    const swipeThreshold = 100;
    const swipePower = Math.abs(offset.x) * velocity.x;

    if (swipePower < -swipeThreshold && index < 2) {
      setIndex(index + 1);
    } else if (swipePower > swipeThreshold && index > 0) {
      setIndex(index - 1);
    }
  };
 
  return (
    <Container>
      <AnimatePresence initial={false}>
        <Card
          key={index}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {cards[index] === "Schedule" && (
            <>
              <h1>לו"ז יום הולדת - שולי</h1>
              <h2>3 בפברואר 2025</h2>
              <ScheduleBox>
                <h3>לוח זמנים:</h3>
                <p>16:00 - יציאה לכיוון מעיין צבי</p>
                <p>17:30 - יין בשקיעה</p>
                <p>20:15 - מסעדת המייסדים 16</p>
                <p>21:45 - יציאה הביתה</p>
                <p>23:30 - הגעה הביתה</p>
              </ScheduleBox>
            </>
          )}

{cards[index] === "PersonalMessage" && (
  <PersonalMessageCard>
    <MessageContent>
      <h1><center>מאמי שלי</center></h1>
      <p>
      אהובתי המדהימה, יום הולדת שמח! אני יושב וכותב לך את המילים האלה, ועדיין קשה לי להאמין שזכיתי בך. את פשוט מתנה שהיקום החליט לפנק אותי בה, ואין לי מילים להודות על זה. אני מסתכל עלייך, על כל מה שאת, וזה פשוט ממלא אותי בהערצה.
      </p><p>
ארבע השנים האחרונות היו מטורפות, מלאות בצמיחה, התפתחות, ובעיקר - הרבה אהבה. כל יום איתך הוא שיעור, אני לומד ממך כל כך הרבה.
</p><p>
 את לא רק יפה וחכמה, את גם חזקה, שאפתנית, ופשוט מעוררת השראה. איך את מצליחה להצטיין בלימודים ההנדסיים המטורפים האלה, לתמרן בין מילואים, ועדיין להיות האדם הכי חם ואוהב שאני מכיר? זה פשוט לא נתפס. את עושה הכל בחן ובאלגנטיות, כאילו זה הכי טבעי בעולם. אני רואה איך את מתמודדת עם אתגרים שאחרות בגילך אפילו לא חולמות עליהם, ואני פשוט גאה בך כל כך.
 </p><p>
את לא רק מצליחה בכל מה שאת עושה, את גם דואגת לכולם מסביבך. החברים, המשפחה, החיילים שלך, וכן, גם לי, למרות שאני בטוח שאני מעמיד את הסבלנות שלך במבחן לא פעם. את הכוח שלי, הכתף שלי, האור שלי ביום אפור. את הסיבה שאני קם כל בוקר עם חיוך, גם אם הוא מלווה בגיחוך שלך כשאני שוב מחפש את המפתחות. את משפיעה עליי בצורה מדהימה, בלי אפילו לנסות, את גורמת לי להיות בן אדם טוב יותר. אני באמת לא יכול לדמיין את החיים שלי בלעדייך.
</p><p>
את החצי השני שלי, זה שהשלים אותי, זה שגורם לי להרגיש שאני במקום הנכון. את פשוט נכונה לי, בכל כך הרבה מובנים. זה כאילו שנועדנו להיות ביחד, וכל רגע איתך רק מחזק את זה. את גורמת לי לצחוק, גם כשאני לא רוצה, את מקשיבה לי, גם כשאני מקטר, ואת תומכת בי בכל דבר שאני עושה. את מדהימה אותי כל פעם מחדש, וכל יום אני מגלה בך דברים חדשים שאני אוהב.
</p><p>
השנה הזו מיוחדת בטירוף, כי אנחנו מתחילים את הפרק החדש שלנו – פרק שבו אנחנו סוף סוף הופכים לבעל ואישה! (טוב, אני לפחות רואה את זה כחוזה מחייב וללא החזרות, מזל טוב לנו!). אנחנו כבר מרגישים כמו משפחה, הכלבה שלנו כבר מזמן אימצה את תפקיד הבת הבכורה, אבל בקרוב זה יהיה רשמי, ונתחיל לבנות את החיים שתמיד חלמנו עליהם ביחד. אני כל כך מתרגש לחשוב על העתיד שלנו, על כל החוויות שאנחנו הולכים לעבור ביחד.
</p><p>
אז אהובתי, ביום ההולדת שלך, אני מאחל לך את כל מה שאת נותנת לאחרים – אושר בלי סוף, הצלחה (שזה כבר מובן מאליו במקרה שלך), בריאות, אהבה, וכן, גם עוד קצת סבלנות אליי, כי אני מודה, אני לא תמיד הכי קל, אבל לפחות אני משעשע, לא? אני אוהב אותך בלי גבולות, בלי תנאים ובכל מצב, </p><p>אפילו כשאני שוב שוכח איפה שמתי את הארנק.
</p>
<p>אז יפה שלי, תודה לך פשוט תודה לך , תודה שאת בדיוק כמו שאת ותודה שאת שלי.
  לעולם לא אעזוב אותך ולעולם לא אתן לשום דבר רע לקרות לך , באהבה .</p>
<p>מהמעריץ הכי גדול שלך
</p>
    </MessageContent>
  </PersonalMessageCard>
)}


          {cards[index] === "Gifts" && (
            <>
              <h1> השנה זה צנוע ,<br/><br/> אני מבטיח יום הולדת הבא אביא לך את הירח</h1>
              <GiftGrid>
                <GiftItem src="/Eilat.jpg" alt="Gift 1" />
                <GiftItem src="/massage.jpg" alt="Gift 2" />
                
              </GiftGrid>
            </>
          )}
        </Card>
      </AnimatePresence>
    </Container>
  );
}
