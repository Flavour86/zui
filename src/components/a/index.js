/**
 * Created by Administrator on 2018/6/4.
 */
import './style.css';
// import 'common/base'
import i18n from 'i18n';
(function() {
  const t = i18n.getFixedT(
    'a',
    {
      'zh-CN': {
        a: '我是拓展的语言包, {name}'
      },
      'en-US': {
        a: '我是拓展的语言包en-USen-US, {name}'
      }
    },
    'en-US'
  );
  t('a', { name: '你好！' });
})();
