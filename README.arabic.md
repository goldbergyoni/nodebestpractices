<div dir="rtl">
<h1>الطريقة الافضل لاستخدام Nodejs</h1>

<h1 align="center">
  <img src="assets/images/banner-2.jpg" alt="Node.js Best Practices">
</h1>

<br/>

<div align="center">
  <img src="https://img.shields.io/badge/⚙%20Item%20count%20-%20102%20Best%20Practices-blue.svg" alt="102 items"> <img src="https://img.shields.io/badge/%F0%9F%93%85%20Last%20update%20-%20December%2012%202020-green.svg" alt="Last update: November, 2020"> <img src="https://img.shields.io/badge/ %E2%9C%94%20Updated%20For%20Version%20-%20Node%2014.0.0-brightgreen.svg" alt="Updated for Node 14.0.0">
</div>

<br/>

[![nodepractices](/assets/images/twitter-s.png)](https://twitter.com/nodepractices/) **تابعونا على تويتر !** [**@nodepractices**](https://twitter.com/nodepractices/)

<br/>

اقرأ بلغات مختلفة :  [![CN](/assets/flags/CN.png)**CN**](/README.chinese.md), [![BR](/assets/flags/BR.png)**BR**](/README.brazilian-portuguese.md), [![RU](/assets/flags/RU.png)**RU**](/README.russian.md), [![PL](/assets/flags/PL.png)**PL**](/README.polish.md), [![JA](/assets/flags/JA.png)**JA**](/README.japanese.md), [(![ES](/assets/flags/ES.png)**ES**, ![FR](/assets/flags/FR.png)**FR**, ![HE](/assets/flags/HE.png)**HE**, ![KR](/assets/flags/KR.png)**KR**, ![TR](/assets/flags/TR.png)**TR** and ![EU](/assets/flags/EU.png)**EU** in progress! )](#translations)

<br/>

###### يتم العمل  والمتابعة  من طرف [لجنتنا التوجيهة](#steering-committee)  و [متعاونين اخرين](#collaborators)


<h1>أحدث أفضل الممارسات والأخبار</h1>

- **✅  أفضل الممارسات الجديدة:** Bullet 2.12 من طرف [Alexsey](https://github.com/Alexsey) 
نجد فيها كيف ان الارجاع (return) دون انتظار الدوال الغير متزامنة (async) يؤدي   الى حدوث stacktrace

- **✅  أفضل الممارسات الجديدة:** Bullet 6.8 من طرف Josh Hemphill ينصح باستعمال  BCrypt او Script   عندما تريد حماية خصوصيات المستعمل مثل   كلمات المرور او معلومات سرية اخرى 
. يحتوي على شرح معمق حول متى ولماذا يناسب كل خيار مشروعًا معينًا
. لا تفوت هذا الدليل القصير الذي يقدم نظرة عامة موجزة على خيارات التجزئة المختلفة

<h1>أهلا بك! 3 أشياء يجب أن تعرفها أولاً</h1>

**1. أنت تقرأ العشرات من أفضل مقالات Node.js -** هذا المستودع (repository) عبارة عن ملخص وتنظيم للمحتوى الأعلى تصنيفًا في أفضل ممارسات Node.js ، بالإضافة إلى المحتوى المكتوب هنا بواسطة المتعاونين (collaborators)

**2. إنه أكبر تجميع ، وهو يتزايد كل أسبوع -** حاليًا ، يتم تقديم أكثر من 80 من  الممارسات وتوجيهات ونصائح حول افضل الطرق لتصميم تطبيق باستعمال Nodejs   . يتم العثور على مشاكل و اخطاء من طرف المساهمين  يوميا كما ان هناك  اقتراحات (issues)  جديدة وطلبات سحب (pull request)  دائما للحفاظ على تحديث هذا الكتاب الموجود على الانتر نت . يسعدنا أن نراكم تساهمون هنا ، سواء كان ذلك في إصلاح أخطاء التعليمات البرمجية أو المساعدة في الترجمة أو اقتراح أفكار جديدة رائعة. راجع [إرشادات الكتابة هنا](/.Operations/Writing-guidelines.md)

**3. تحتوي أفضل الممارسات على معلومات إضافية -** تتضمن معظم ها رابطًا **قراءة المزيد** لتتمكن من التوسع اكثر  مع أمثلة التعليمات البرمجية والاقتباسات من المدونات  والمزيد من المعلومات

<br/><br/>

## جدول المحتويات
1. [افضل الممارسات في تصميم المشاريع (5) ](#1-project-structure-practices)
2. [افضل الممارسات في معالجة الأخطاء (11)](#2-error-handling-practices)
3. [افضل الممارسات في نمط الكود (12)](#3-code-style-practices)
4. [Testing And Overall Quality Practices (13) ](#4-testing-and-overall-quality-practices)