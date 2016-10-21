#!/usr/bin/env python
import pika
import sys

connection = pika.BlockingConnection(pika.ConnectionParameters(host=sys.argv[1]))
channel = connection.channel()

#if you do not have a queue already created, then you can remove the comment for the queue_declare
#channel.queue_declare(queue='test')

channel.basic_publish(exchange='',routing_key='test',body=sys.argv[2])

connection.close()