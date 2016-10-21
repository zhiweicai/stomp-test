# stomp-test

SETUP:

First user need to setup the RabbitMQ and enable the web_stomp plugin

sudo rabbitmq-plugins enable rabbitmq_web_stomp

Restart the rabbitmq server. On ubuntu:
sudo /etc/init.d/rabbitmq-server restart

The default port for web-stomp is 15674

Then user need to setup a channel named: test


Send any message to the channel will be displayed on the page

USAGE:
user need to put the ip address of the rabbitmq server into the textbox and click connect
