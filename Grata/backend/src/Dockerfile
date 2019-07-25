FROM python:3.6.7
ENV PYTHONUNBUFFERED 1
WORKDIR /app/backend/src
COPY requirements.txt /app/backend/src
RUN pip3 install --upgrade pip -r requirements.txt
COPY . /app/backend/src
EXPOSE 8000