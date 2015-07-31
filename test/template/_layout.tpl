<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>
    {% block title %}
      {{title}}
    {% endblock %}
  </title>
</head>
<body class="{% if active=='index' %}index{% endif %} {% if active=='login' %}login{% endif %}">
  {% block header %}
    <header class="header">header</header>
  {% endblock %}

  {% block main %}
    <div class="main">header</div>
  {% endblock %}

  {% block header %}
    <footer class="footer">footer</footer>
  {% endblock %}
</body>
</html>