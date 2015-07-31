{% extends '_layout.tpl' %}

{% block title %}
登录
{% endblock %}

{{ block main }}
  <form>
    <div>
      <label>邮箱:</label>
      <input type="text" name="email" />
    </div>
    <div>
      <label>密码:</label>
      <input type="password" name="password" />
    </div>
    <div>
      <input type="submit" value="提交" />
    </div>
  </form>
{{ endblock}}